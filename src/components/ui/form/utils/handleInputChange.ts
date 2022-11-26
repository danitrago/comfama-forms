export const handleInputChange = (e: any, setData: any) => {
  setData((prev: any) => {
    return { ...prev, [e.target.name]: e.target.value };
  });
};
