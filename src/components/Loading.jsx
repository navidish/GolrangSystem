import { ThreeDots } from 'react-loader-spinner';

function Loading({ width = '75', height = '40' }) {
  return (
    <div className="w-full bg-slate-100 h-screen flex justify-center items-center">
      <ThreeDots
        height={height}
        width={width}
        radius={9}
        color="rgb(var(--color-primary-900))"
        wrapperStyle={{
          display: 'flex',
          justifyContent: 'center',
        }}
        visible={true}
      />
    </div>
  );
}
export default Loading;
