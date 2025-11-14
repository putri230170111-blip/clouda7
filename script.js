import { createClient } from "https://esm.sh/@supabase/supabase-js";

const supabaseUrl = "https://hptietsvdoefjuivtuvr.supabase.co"; 
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhwdGlldHN2ZG9lZmp1aXZ0dXZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMxMjMwNDAsImV4cCI6MjA3ODY5OTA0MH0.XYZseGHjamoXi_S2aXqNwJlw6rO48xoLPQP7wgC-fFk";

const db = createClient(supabaseUrl, supabaseKey);

// menampilkan nama otomatis dari halaman sebelumnya
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("nama_auto").value = sessionStorage.getItem("nama");
});

async function kirim() {
  const nama = sessionStorage.getItem("nama");
  const email = document.getElementById("email").value;
  const telepon = document.getElementById("telepon").value;
  const alamat = document.getElementById("alamat").value;
  const gender = document.getElementById("gender").value;

  const { data, error } = await db
    .from("users")
    .insert([
      { nama, email, telepon, alamat, gender }
    ]);

  if (error) {
    alert("Gagal: " + error.message);
  } else {
    alert("Data berhasil dikirim!");
  }
}
