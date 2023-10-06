import SearchIcon from "@mui/icons-material/Search";

const Header = ({ onChange }) => {
  return (
    <div className=" flex bg-slate-700 h-auto mb-[5rem] items-center justify-between gap-10">
      <div className="ml-10">
        <h1>Logo Goes Here</h1>
      </div>
      <div className="mr-10 ">
        <input
          type="text"
          className=" w-10rem px-6 py-2 mx-auto my-4 rounded-3xl border-none outline-none"
          onChange={onChange}
        />
        <SearchIcon className="absolute top-[1.55rem] right-[50px] hover:cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
