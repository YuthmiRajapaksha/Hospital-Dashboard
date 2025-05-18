import axios from 'axios';

const getLabReportsToday = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/lab-reports/count-today");
    const labReportsTodayRes = response.data;
    console.log(labReportsTodayRes);
    return labReportsTodayRes;
  } catch (error) {
    console.error("Error fetching lab reports:", error);
    return null;
  }
};
export {getLabReportsToday};