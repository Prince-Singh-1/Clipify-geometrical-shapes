import SideBar from "./pages/SideBar";
import Main from "./pages/Main";
import { data } from "./utility/data";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState("Home");

  const onChangePage = (pageName) => {
    setCurrentPage(pageName);
  };
  const handleChange = (term) => {
    setSearchTerm(term);
  };
  let renderedData = data;
  if (currentPage === "Polygon") {
    renderedData = renderedData.slice(0, 11);
  } else if (currentPage === "Arrow") {
    renderedData = renderedData.filter((each) => {
      return each.name.includes(currentPage);
    });
  } else if (currentPage === "Circle") {
    renderedData = renderedData.filter((each) => {
      return each.name.includes(currentPage) || each.name.includes("Ellipse");
    });
  } else if (currentPage === "Miscellaneous") {
    renderedData = renderedData.slice(11).filter((each) => {
      return (
        !each.name.includes("Arrow") &&
        !each.name.includes("Circle") &&
        !each.name.includes("Ellipse")
      );
    });
  }

  renderedData = renderedData.filter((each) => {
    return each.name.toLowerCase().includes(searchTerm.trim().toLowerCase());
  });
  return (
    <div className='app md:flex'>
      <SideBar
        onChange={handleChange}
        searchTerm={searchTerm}
        onChangePage={onChangePage}
        currentPage={currentPage}
      />

      <Main data={renderedData} searchTerm={searchTerm} />
    </div>
  );
}

export default App;
