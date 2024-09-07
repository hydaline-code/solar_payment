// Overall Statistics Data
export const overallData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Monthly Subscribers',
      data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
      backgroundColor:'rgba(212, 209, 209, 0.6)',
      borderColor: 'rgba(212, 209, 209, 1)',
      borderWidth: 1,
    },
  ],
};

// Transactions Data
export const transactionsData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Daily Transactions',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: 'rgba(212, 209, 209, 0.6)',
      borderColor: 'rgba(212, 209, 209)',
      borderWidth: 1,
    },
    {
      label: 'Bills Paid:FcFa',
      data: [28, 48, 40, 19, 86, 27, 90],
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      borderColor: 'rgba(0, 10, 0, 1)',
      borderWidth: 1,
    },
  ],
};

// Active Users Data
export const activeUsersData = {
  labels: ['Daily', 'Weekly', 'Monthly'],
  datasets: [
    {
      data: [25, 50, 25], // Example data values
      backgroundColor: ['#1E2022', '#D4D1D1', '#D9D9D9'],
      hoverBackgroundColor: ['#DDCCCC', '#DDCCCC', '#DDCCCC'],
    },
  ],
};