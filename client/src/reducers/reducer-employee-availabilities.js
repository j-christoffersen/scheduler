const employeeAvailabilities = (state = null, action) => {
  switch (action.type) {
    case 'GET_EMPLOYEE_AVAILABILITIES':
      return action.payload.data;
    case 'UPDATE_EMPLOYEE_AVAILABILITY':
      return state.filter((availability) => {
        return availability.user_id !== action.payload.data[0].user_id;
      }).concat(action.payload.data);
    case 'ADD_EMPLOYEE':
      return action.payload.data.employeeAvailabilities;
    case 'GET_ALL':
      return action.payload.data.employeeAvailabilities;
    default:
      return state;
  }
};

export default employeeAvailabilities;
