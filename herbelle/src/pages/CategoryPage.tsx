// dynamic route that displays all recipes belonging to the selected category specified in the url
// shows a list of recipes in that category with links to its detailed recipe page
// builds the category page based on the category in the url

import CommonNavBar from "../components/CommonNavBar";

export default function CategoryPage() {
  return (
    <div className="bg-background flex flex-col m-15">
      <CommonNavBar />
      <div className="flex flex-col gap-5 mb-5">
        <div className="flex flex-row justify-between">
          <div className="flex justify-start">Home/Vegan</div>
          <div className="flex justify-end">/category/Vegan</div>
        </div>
      </div>
      <div className="flex flex-col">
        <h1>Vegan Kitchen</h1>
        <h2>Plant-based: no dairy, eggs, or honey</h2>
        <h3>6 recipes </h3>
      </div>
      <div>
        {" "}
        This section displays all the recipes pulled for that category using map
      </div>
    </div>
  );
}
