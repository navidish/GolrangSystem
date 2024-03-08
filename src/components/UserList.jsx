import { useQuery } from '@tanstack/react-query';
import { getUserListApi } from '../services/users';
import Loading from '../uiKit/Loading';
import Empty from '../uiKit/Empty';
import Table from '../uiKit/Table';
import User from './User';
import { useEffect, useState } from 'react';

const UserList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['user-list'],
    queryFn: getUserListApi,
  });

  const [users, setUsers] = useState(data);

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
