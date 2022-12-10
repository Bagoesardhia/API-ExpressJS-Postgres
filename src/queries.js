// Query for API AddAdmin
const addAdmin =
  "INSERT INTO kapp.kapp_master_admin (NAME,role,isActive) VALUES ($1,$2,$3)";

// Query Show Admin
const showAdmin = "SELECT * FROM kapp.kapp_master_admin";

// Query Update Status Active
const updateStatusActive =
  "UPDATE FROM kapp.kapp_master_admin SET isActive = ($1) WHERE isActive is not null";

module.exports = {
  addAdmin,
  showAdmin,
  updateStatusActive,
};
