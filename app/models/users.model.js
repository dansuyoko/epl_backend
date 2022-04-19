module.exports = (mongoose) => {
<<<<<<< HEAD
  const schema = mongoose.Schema(
    {
      email: String,
      username: String,
      address: String,
      phone_number : String,
      password: String,
    },
    { timestamps: true }
  );
=======
    const schema = mongoose.Schema(
        {
            email: String,
            pass: String,
            namaDepan: String,
            namaBelakang: String,
            asal: String,
            status: String,
        },
        {timestamps: true}
    );
>>>>>>> dcfb1be2047f65331054800ad4210d00f2071f1d

  const Users = mongoose.model('users', schema);
  return Users;
};
