// Header.js
const Header = () => {
  return (
    <div className='absolute top-0 left-0 w-full bg-gradient-to-b from-black/80 to-transparent p-4 z-10'>
      <img
        className='w-32 md:w-32 lg:w-40 object-contain'
        src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'
        alt='logo'
      />
    </div>
  );
};

export default Header;
