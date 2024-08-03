/* eslint-disable no-unused-vars */
import { useForm } from 'react-hook-form';
import TextField from '../components/TextField';
import SelectField from '../components/SelectField';

import { useQuery } from '@tanstack/react-query';
import { getUserApi } from '../services/users';
import Loading from '../components/Loading';
const CreateUser = ({ onSubmit, id }) => {
  console.log('id', id);
  const { data, isLoading } = useQuery({
    queryKey: ['user-api'],
    queryFn: () => getUserApi(id),
    enabled: !!id,
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ defaultValues: data || {} });

  const { city: address } = data?.address || '';

  if (isLoading) return <Loading />;

  return (
    <form
      className=" grid grid-cols-2 gap-4 "
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        label={'نام‌ونام‌خانوادگی'}
        name="name"
        register={register}
        required
        validationSchema={{
          required: 'نام‌و‌نام‌خانوادگی ضروری است',
          minLength: {
            value: 1,
            message: 'حداقل 1 کاراکتر را وارد کنید',
          },
        }}
        type="text"
        errors={errors}
      />
      <TextField
        label={'نام کاربری'}
        name="username"
        register={register}
        required
        validationSchema={{
          required: 'نام کاربری ضروری است',
        }}
        type="text"
        errors={errors}
      />
      <TextField
        label={'ایمیل'}
        name="email"
        register={register}
        required
        validationSchema={{
          required: 'ایمیل  ضروری است',
        }}
        type="text"
        errors={errors}
      />
      <TextField
        label={'شماره تماس'}
        name="phone"
        register={register}
        required
        validationSchema={{
          required: 'شماره تماس  ضروری است',
        }}
        type="text"
        errors={errors}
      />
      <SelectField
        label="آدرس"
        required
        name="address"
        type="text"
        register={register}
        options={[
          { label: 'شیراز', value: 'شیراز' },
          { label: 'تهران', value: 'تهران' },
          { label: 'تبریز', value: 'تبریز' },
          { label: 'اصفهان', value: 'اصفهان' },
        ]}
      />
      <button type="submit" className="btn btn--primary w-full col-span-2">
        تایید
      </button>
    </form>
  );
};
export default CreateUser;
