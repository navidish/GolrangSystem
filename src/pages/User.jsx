import { useState } from 'react';

import { HiOutlineTrash } from 'react-icons/hi';
import { TbPencilMinus } from 'react-icons/tb';
import { toast } from 'react-hot-toast';
import Table from '../components/Table';
import Modal from '../components/Modal';
import DeleteUser from './DeleteUser';
import { useMutation } from '@tanstack/react-query';
import { deleteUserApi } from '../services/users';
import CreateUser from './CreateUser';

const User = ({ user, index, onDelete }) => {
  const [modalState, setModealState] = useState({
    isEdit: false,
    isDelete: false,
  });

  const { mutate } = useMutation({
    mutationFn: deleteUserApi,
    onSuccess: () => {
      toast.success('حذف کاربر با موفقیت انجام شد.');
    },

    onError: (err) => toast.error(`حذف  کاربر با ${err} مواجه شد.`),
  });

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
            <button
              onClick={() => setModealState({ ...modalState, isEdit: true })}
            >
              <TbPencilMinus className="w-5 h-5 text-primary-900" />
            </button>
            <Modal
              title={`ویرایش ${user?.name}`}
              open={modalState.isEdit}
              onClose={() => setModealState({ ...modalState, isEdit: false })}
            >
              <CreateUser
                editMode={true}
                id={user?.id}
                onConfirm={() => {
                  console.log('hiiiiiiiiiii');
                }}
              />
            </Modal>
          </>
          <>
            <button
              onClick={() => setModealState({ ...modalState, isDelete: true })}
            >
              <HiOutlineTrash className="w-5 h-5 text-error" />
            </button>
            <Modal
              title={`حذف ${user?.name}`}
              open={modalState.isDelete}
              onClose={() => setModealState({ ...modalState, isDelete: false })}
            >
              <DeleteUser
                resourceName={user?.name}
                onClose={() =>
                  setModealState({ ...modalState, isDelete: false })
                }
                onConfirm={() =>
                  mutate(user.id, {
                    onSuccess: () => {
                      setModealState({ ...modalState, isDelete: false });
                      onDelete(user?.id);
                    },
                  })
                }
              />
            </Modal>
          </>
        </div>
      </td>
    </Table.Row>
  );
};
export default User;
