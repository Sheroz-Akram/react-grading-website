import GradePolicy from "./GradePolicy.json";

function GradeInput({
  subjectIndex,
  subjectDelete,
  subjectGPAHandler,
  subjectCreditHandler,
}) {

  // List of All Credit Hours Availible
  let creditList = [4, 3, 2, 1];

  return (
    <>
      <form className="flex justify-between gap-5 w-[80%]">
        <div className="w-[35%]">
          <select
            onChange={(e) => {
              subjectGPAHandler(subjectIndex, parseFloat(e.target.value));
            }}
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected value={"N/A"}>
              Select Grade
            </option>
            {GradePolicy.map((value, index) => {
              return (
                <option key={index} value={value.gpa}>
                  {value.sign}
                </option>
              );
            })}
          </select>
        </div>
        <div className="w-[35%]">
          <select
            onChange={(e) => {
              subjectCreditHandler(subjectIndex, parseInt(e.target.value));
            }}
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected value={"N/A"}>
              Select Credits
            </option>
            {creditList.map((value, index) => {
              return (
                <option key={index} value={value}>
                  {value}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <button
            onClick={() => subjectDelete(subjectIndex)}
            type="button"
            className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Delete
          </button>
        </div>
      </form>
    </>
  );
}

export default GradeInput;
