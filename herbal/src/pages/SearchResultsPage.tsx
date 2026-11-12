// search bar in a shared navbar allowing users to look up recipes by name
// displays results on this page of the search query
// this page is connected to the Browse tab

import CommonNavBar from "../components/CommonNavBar";
import Navbar from "../components/Navbar";
import { useState } from "react";
export default function SearchResultsPage() {
  // pass props from NavBar to this page
  // use props to fetch results by searching that term and display here
  // passing value from child to parent component

  const [userSearchTerm, setUserSearchTerm] = useState<string>("");

  console.log(userSearchTerm);
  return (
    <div className="bg-background flex flex-col m-15">
      <CommonNavBar />
      <hr className="mt-10 border-2 border-border" />
      <Navbar setUserSearchTerm={setUserSearchTerm} />
    </div>
  );
}
