// dynamic route that displays all recipes belonging to the selected category specified in the url
// shows a list of recipes in that category with links to its detailed recipe page
// builds the category page based on the category in the url

import CommonNavBar from "../components/CommonNavBar";

export default function CategoryPage() {
  return (
    <div className="bg-background flex flex-col m-15">
      <CommonNavBar />
      <hr className="mt-10 border-2 border-border" />
      <div className="flex flex-col gap-5 mb-5 mt-5">
        <div className="flex flex-row justify-between text-primary">
          <div className="flex justify-start">Home/Vegan</div>
          <div className="flex justify-end bg-primary-soft">
            /category/Vegan
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 md:flex-row p-6 bg-primary-soft rounded-xl justify-between">
        <div className="flex flex-col justify-start">
          <h1 className="text-3xl text-primary mb-1">Vegan Kitchen</h1>
          <p className="text-sm mb-1">Plant-based: no dairy, eggs, or honey</p>
          <p className="text-xs text-primary">6 recipes </p>
        </div>
        <div className="justify-end">
          <button className="bg-surface text-primary rounded-xl border-1 border-primary px-3 py-1">
            Switch to Vegetarian Kitchen
          </button>
        </div>
      </div>
      <div>
        {" "}
        This section displays all the recipes pulled for that category using map
      </div>
    </div>
  );
}
