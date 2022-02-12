import fs from "fs";
export const generateFormId = () => {
  const promise = new Promise((resolve, reject) => {
    fs.readFile("formid.txt", (err, data) => {
      const date = new Date();
      let result = date.toLocaleDateString("en-IN", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });
      const [day, month, year] = result.split("/");
      const YearMonth = `${year}${month}${day}`;
      if (!data) {
        fs.writeFile("formid.txt", "1", (err) => {
          if (err) {
            console.log(err);
            reject(err);
          }
          resolve(`${YearMonth}1`);
        });
      } else {
        const currentIdCounter = parseInt(data);
        const nextIdCounter = currentIdCounter + 1;
        const finalNextFormId = `${YearMonth}${nextIdCounter}`;
        fs.writeFile("formid.txt", nextIdCounter.toString(), (err) => {
          if (err) {
            console.log(err);
            reject(err);
          }
          resolve(finalNextFormId);
        });
      }
    });
  });
  return promise;
};
