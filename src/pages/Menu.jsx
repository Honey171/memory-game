import MenuItems from '../components/MenuItems';

function Menu() {
  return (
    <main className="flex flex-col space-y-10 items-center justify-center h-screen">
      <p className="text-2xl text-white font-medium hover:tracking-widest transition-all duration-500">
        Matching game
      </p>
      <MenuItems />
    </main>
  );
}

export default Menu;
