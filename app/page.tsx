import Articles from "./components/Home/Articles";

const Home = () => {
  return (
    <div>
      <h1 className="text-5xl font-semibold text-center">
        Best Articles Chosen for You
      </h1>
      <hr className="my-6 mx-auto w-10/12 h-0.5 bg-slate-300 rounded-md" />
      <Articles />
    </div>
  );
};

export default Home;
