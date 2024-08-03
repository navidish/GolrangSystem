import { useMutation, useQuery } from '@tanstack/react-query';
import { createUserApi, getUserListApi } from '../services/users';
import Loading from '../components/Loading';
import Empty from '../components/Empty';
import Table from '../components/Table';
import User from './User';
import { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import Modal from '../components/Modal';
import CreateUser from './CreateUser';
import toast from 'react-hot-toast';
import { IoIosSearch, IoIosClose } from 'react-icons/io';
import ComboField from '../components/ComboField';

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
  const [search, setSearch] = useState('');
  const [selectedUser, setSelectedUser] = useState('');
  const [userModal, setUserModal] = useState(false);
  useEffect(() => {
    setUsers(data);
  }, [data]);

  const handledelte = (deletedId) => {
    setUsers(users.filter((user) => user.id !== deletedId));
  };
  const handleSearch = (event, searchValue) => {
    event.preventDefault();

    setUsers(
      !searchValue
        ? data
        : data.filter(({ username, name }) =>
            searchValue.includes(username || name)
          )
    );
  };

  const handleChange = (event) => {
    setSelectedUser(event.target.value);
    setUsers(data.filter((user) => user.name == event.target.value));
  };

  if (isLoading)
    return (
      <div className="w-full bg-slate-100 h-screen flex justify-center items-center">
        <Loading />
      </div>
    );

  return (
    <div>
      <div className="flex justify-between">
        <div className="w-60 text-sm flex items-center justify-center">
          <input
            className="  w-full  py-3 px-4 rounded-xl text-secondary-900 border border-secondary-100 bg-secondary-100 hover:border-primary-500 focus:border-primary-500 focus:bg-secondary-0 transition-all duration-300 ease-out focus:shadow-lg focus:shadow-primary-200 dark:focus:shadow-secondary-200"
            name="search"
            value={search}
            type="text"
            placeholder="جستجو"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            onClick={(e) => handleSearch(e, search)}
            className=" btn btn--primary flex justify-center items-center "
          >
            <IoIosSearch />
          </button>
        </div>
        <div className="w-60 text-sm flex items-center justify-center">
          <ComboField
            onChange={handleChange}
            value={selectedUser}
            options={data.map(({ name }) => name)}
          />
          <button
            onClick={() => {
              setSelectedUser(''), setUsers(data);
            }}
            className=" btn btn--primary flex justify-center items-center"
          >
            <IoIosClose />
          </button>
        </div>
        <button
          onClick={() => setUserModal(true)}
          className=" btn btn--primary flex justify-center items-center gap-x-2"
        >
          <FaPlus />
          <span>افزودن کاربر</span>
        </button>
      </div>
      <Modal
        title={`افزودن کاربر `}
        open={userModal}
        onClose={() => setUserModal(false)}
      >
        {userModal && (
          <CreateUser
            onSubmit={(data) => {
              mutate(data, {
                onSuccess: () => setUserModal(false),
              });
            }}
          />
        )}
      </Modal>
      {!users?.length ? (
        <Empty resourceName={'لیست کاربران'} />
      ) : (
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
                //onEdit={handleEdit}
              />
            ))}
          </Table.Body>
        </Table>
      )}
    </div>
  );
};
export default UserList;
