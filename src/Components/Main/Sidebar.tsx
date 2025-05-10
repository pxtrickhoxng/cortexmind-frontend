const Sidebar = ({ isClicked }: { isClicked: boolean }) => {
  return (
    <div
      className={`h-screen w-64 bg-gray-950 fixed top-0 left-0 transform transition-transform duration-300 ease-in-out ${
        isClicked ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      placeholder
    </div>
  );
};

export default Sidebar;
