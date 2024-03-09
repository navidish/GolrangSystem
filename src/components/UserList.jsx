import { useMutation, useQuery } from '@tanstack/react-query';
import { createUserApi, getUserListApi } from '../services/users';
import Loading from '../uiKit/Loading';
import Empty from '../uiKit/Empty';
import Table from '../uiKit/Table';
import User from './User';
import { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import Modal from '../uiKit/Modal';
import CreateUser from './CreateUser';
import toast from 'react-hot-toast';

const UserList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['user-list'],
    queryFn: getUserListApi,
  });
  const { mutate } = useMutation({
    mutationFn: createUserApi,
    onSuccess: () => {
      toast.success('افزودن کاربر با موفقیت انجام شد.');
    },

    onError: (err) => toast.error(`افزودن کاربر با ${err} مواجه شد.`),
  });

  const [users, setUsers] = useState(data);
  const [userModal, setUserModal] = useState(false);

  useEffect(() => {
    setUsers(data);
  }, [data]);

  const handledelte = (deletedId) => {
    setUsers(users.filter((user) => user.id !== deletedId));
  };

  if (!users?.length) return <Empty resourceName={'لیست کاربران'} />;
  if (isLoading) return <Loading />;

  return (
    <div>
      <button
        onClick={() => setUserModal(true)}
        className=" items-end btn btn--primary flex gap-x-2"
      >
        <FaPlus />
        <span>افزودن کاربر</span>
      </button>

      <Modal
        title={`افزودن کاربر `}
        open={userModal}
        onClose={() => setUserModal(false)}
      >
        <CreateUser
          onSubmit={(data) => {
            mutate(data, {
              onSuccess: () => setUserModal(false),
            });
          }}
        />
      </Modal>
      <Table>
        <Table.Header>
          <th>#</th>
          <th>نام‌ونام‌خانوادگی</th>
          <th>نام کاربری</th>
          <th>ایمیل</th>
          <th>آدرس</th>
          <th>شماره تماس</th>
          <th>وب سایت</th>
          <th>شرکت</th>
          <th>عملیات</th>
        </Table.Header>
        <Table.Body>
          {users?.map((user, index) => (
            <User
              key={user.id}
              user={user}
              index={index}
              onDelete={handledelte}
            />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};
export default UserList;
