import { useState } from "react";
import GradeInput from "./GradeInput";
import InputCurrent from "./InputCurrent";

function GradesInput() {
  // Store All Subject Grades and Credits
  let [gradeList, setGradeList] = useState([
    {
      gpa: 0.0,
      credits: 0,
    },
  ]);

  // Store Grade Information
  let [gpa, setGpa] = useState(0.0);

  // Add New Subject to List
  const addSubject = () => {
    setGradeList((prevGradeList) => [
      ...prevGradeList,
      { gpa: 0.0, credits: 0 },
    ]);
  };

  // Delete Subject From List
  const deleteSubject = (index) => {
    setGradeList((prevGradeList) =>
      prevGradeList.filter((_, i) => i !== index)
    );
  };

  // Input Subject Grade
  const handleGPAInput = (index, value) => {
    setGradeList((prevGradeList) => {
      const updatedGradeList = [...prevGradeList];
      updatedGradeList[index] = {
        ...updatedGradeList[index],
        gpa: value,
      };
      return updatedGradeList;
    });
  };

  // Input Subject Grade
  const handleCreditsInput = (index, value) => {
    setGradeList((prevGradeList) => {
      const updatedGradeList = [...prevGradeList];
      updatedGradeList[index] = {
        ...updatedGradeList[index],
        credits: value,
      };
      return updatedGradeList;
    });
  };

  // Find the Total GPA
  let findGPA = () => {
    let totalGrade = 0.0;
    let totalCredits = 0;
    gradeList.forEach((value, index) => {
      totalGrade += value.gpa * value.credits;
      totalCredits += value.credits;
    });
    console.log(`Total Credits: ${totalGrade}, Total Credits: ${totalCredits}`);
    return totalGrade / totalCredits;
  };

  // Calculate GPA and CGPA
  const calculateComplete = () => {
    setGpa(findGPA().toFixed(2));
  };

  return (
    <>
      <div className="flex flex-col items-center w-full sm:w-[50%]">

        <InputCurrent />


        {gradeList.map((value, index) => {
          return (
            <GradeInput
              key={index}
              subjectIndex={index}
              subjectDelete={deleteSubject}
              subjectGPAHandler={handleGPAInput}
              subjectCreditHandler={handleCreditsInput}
            />
          );
        })}

        <div className="inline-flex items-center justify-center w-full mt-5">
          <hr className="w-[80%] h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
            <button
              onClick={addSubject}
              type="button"
              className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
            >
              Add
            </button>
          </span>
        </div>

        <div className="flex flex-col w-[80%] my-4">
          <button
            onClick={calculateComplete}
            type="button"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
          >
            Calculate
          </button>

          <div className="w-full relative overflow-x-auto rounded-lg my-4">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <tbody>
                <tr className="bg-gray-300 dark:bg-gray-800">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    GPA
                  </th>
                  <td className="px-6 py-4">{gpa}</td>
                </tr>
                <tr className="bg-gray-300 dark:bg-gray-800">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    CGPA
                  </th>
                  <td className="px-6 py-4">{0.0}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default GradesInput;
