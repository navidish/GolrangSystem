import Table from '../uiKit/Table';

import { HiOutlineTrash } from 'react-icons/hi';
import { TbPencilMinus } from 'react-icons/tb';
const User = ({ user, index }) => {
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{user?.name}</td>
      <td>{user?.username}</td>
      <td>{user?.email}</td>
      <td>{user?.address?.city}</td>
      <td>{user?.phone}</td>
      <td>{user?.website}</td>
      <td>{user?.company?.name}</td>
      <td>
        <div className="flex items-center gap-x-4">
          <>
            <button>
              <TbPencilMinus className="w-5 h-5 text-primary-900" />
            </button>
          </>
          <>
            <button>
              <HiOutlineTrash className="w-5 h-5 text-error" />
            </button>
          </>
        </div>
      </td>
    </Table.Row>
  );
};
export default User;
