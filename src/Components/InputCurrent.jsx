function InputCurrent({ storeCgpa, storeCredits }) {
  return (
    <>
      <div className="w-full flex flex-col items-center gap-5 my-5">
        <div className="w-[80%]">
          <label
            for="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Current CGPA
          </label>
          <input
            onChange={(e) => {
              storeCgpa(parseFloat(e.target.value).toFixed(2));
            }}
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="3.71"
            required
          />
        </div>

        <div className="w-[80%]">
          <label
            for="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Credit Accepted Towards Degree
          </label>
          <input
            onChange={(e) => {
              storeCredits(parseInt(e.target.value));
            }}
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="78"
            required
          />
        </div>
      </div>
    </>
  );
}

export default InputCurrent;
