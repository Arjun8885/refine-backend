import AdminModal from "../mongodb/models/admin.js";

async function createAdmin(req, res) {
  const { email, password } = req.body;

  const result = await AdminModal.findOne({
    email,
  });
  if (!result) return res.status(500).send("Admin doesnot exists");
  if (!(result.password === password)) {
    return res.status(401).send("Incorrect password");
  }
return res.status(200).json({
    adminName:result.email,
    loggedinStatus:"success"
})
}
export { createAdmin };
