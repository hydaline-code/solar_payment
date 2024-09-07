// Overall Statistics Data
export const overallData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Monthly Subscribers',
      data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
      borderColor: 'rgba(75, 192, 192, 1)',
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
      backgroundColor: 'rgba(153, 102, 255, 0.6)',
      borderColor: 'rgba(153, 102, 255, 1)',
      borderWidth: 1,
    },
    {
      label: 'Bill Amount',
      data: [28, 48, 40, 19, 86, 27, 90],
      backgroundColor: 'rgba(255, 159, 64, 0.6)',
      borderColor: 'rgba(255, 159, 64, 1)',
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
      backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384'],
      hoverBackgroundColor: ['#36A2EB', '#FFCE56', '#FF6384'],
    },
  ],
};