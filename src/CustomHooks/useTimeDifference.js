const usecalculateTimeDifference = (createdDate) => {
    const currentDate = new Date();
    const issueDate = new Date(createdDate);
    const timeDifference = currentDate - issueDate;
    const minutesDifference = Math.floor(timeDifference / (1000 * 60));
    const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const monthsDifference = Math.floor(
      timeDifference / (1000 * 60 * 60 * 24 * 30)
    );
    const yearsDifference = Math.floor(
      timeDifference / (1000 * 60 * 60 * 24 * 365)
    );
  
    if (yearsDifference > 0) {
      return yearsDifference === 1
        ? "1 year ago"
        : `${yearsDifference} years ago`;
    } else if (monthsDifference > 0) {
      return monthsDifference === 1
        ? "1 month ago"
        : `${monthsDifference} months ago`;
    } else if (daysDifference > 0) {
      return daysDifference === 1 ? "1 day ago" : `${daysDifference} days ago`;
    } else if (hoursDifference > 0) {
      return hoursDifference === 1
        ? "1 hour ago"
        : `${hoursDifference} hours ago`;
    } else {
      return minutesDifference === 1
        ? "1 minute ago"
        : `${minutesDifference} minutes ago`;
    }
  };
  
export default usecalculateTimeDifference;