import { useState } from "react";
import "./App.css";

function App() {
  const [students, setStudents] = useState([
    {
      id: 1,
      photo: "https://i.pravatar.cc/300?img=12",
      fullName: "Arjun Sharma",
      course: "B.Tech",
      branch: "Computer Science",
      university: "Delhi University",
      address: "New Delhi, India",
    },
    {
      id: 2,
      photo: "https://i.pravatar.cc/300?img=13",
      fullName: "Rahul Kumar",
      course: "BCA",
      branch: "Information Technology",
      university: "Amity University",
      address: "Noida, India",
    },
  ]);

  const [form, setForm] = useState({
    photo: "",
    fullName: "",
    course: "",
    branch: "",
    university: "",
    address: "",
  });

  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState(null);

  // Input handle
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // ADD / UPDATE
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.photo ||
      !form.fullName ||
      !form.course ||
      !form.branch ||
      !form.university ||
      !form.address
    ) {
      alert("Please fill all fields");
      return;
    }

    if (editId !== null) {
      // UPDATE STUDENT
      setStudents(
        students.map((student) =>
          student.id === editId
            ? { ...student, ...form }
            : student
        )
      );

      setEditId(null);
    } else {
      // ADD STUDENT
      const newStudent = {
        id: Date.now(),
        ...form,
      };

      setStudents([...students, newStudent]);
    }

    // Reset form
    setForm({
      photo: "",
      fullName: "",
      course: "",
      branch: "",
      university: "",
      address: "",
    });
  };

  // EDIT
  const handleEdit = (student) => {
    setForm({
      photo: student.photo,
      fullName: student.fullName,
      course: student.course,
      branch: student.branch,
      university: student.university,
      address: student.address,
    });

    setEditId(student.id);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // DELETE
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (confirmDelete) {
      setStudents(
        students.filter((student) => student.id !== id)
      );
    }
  };

  // SEARCH
  const filteredStudents = students.filter((student) => {
    const value = search.toLowerCase();

    return (
      student.fullName.toLowerCase().includes(value) ||
      student.course.toLowerCase().includes(value) ||
      student.branch.toLowerCase().includes(value) ||
      student.university.toLowerCase().includes(value) ||
      student.address.toLowerCase().includes(value)
    );
  });

  // CANCEL EDIT
  const handleCancel = () => {
    setEditId(null);

    setForm({
      photo: "",
      fullName: "",
      course: "",
      branch: "",
      university: "",
      address: "",
    });
  };

  return (
    <div className="app">

      {/* HEADER */}

      <header>
        <h1>🎓 Student Management System</h1>

        <p>
          Manage all student information in one place
        </p>
      </header>

      <main>

        {/* ADD / UPDATE FORM */}

        <section className="form-section">

          <h2>
            {editId !== null
              ? "✏️ Update Student"
              : "➕ Add New Student"}
          </h2>

          <form onSubmit={handleSubmit}>

            <div className="form-grid">

              {/* PHOTO */}

              <input
                type="url"
                name="photo"
                placeholder="Student Photo URL"
                value={form.photo}
                onChange={handleChange}
              />

              {/* FULL NAME */}

              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={form.fullName}
                onChange={handleChange}
                className="name"
              />

              {/* COURSE */}

              <input
                type="text"
                name="course"
                placeholder="Course"
                value={form.course}
                onChange={handleChange}
              />

              {/* BRANCH */}

              <input
                type="text"
                name="branch"
                placeholder="Branch"
                value={form.branch}
                onChange={handleChange}
              />

              {/* UNIVERSITY */}

              <input
                type="text"
                name="university"
                placeholder="University Name"
                value={form.university}
                onChange={handleChange}
              />

              {/* ADDRESS */}

              <input
                type="text"
                name="address"
                placeholder="Address"
                value={form.address}
                onChange={handleChange}
              />

            </div>

            <div className="form-buttons">

              <button className="add-btn" type="submit">
                {editId !== null
                  ? "🔄 Update Student"
                  : "➕ Add Student"}
              </button>

              {editId !== null && (
                <button
                  className="cancel-btn"
                  type="button"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              )}

            </div>

          </form>

        </section>

        {/* SEARCH */}

        <section className="search-section">

          <input
            type="text"
            placeholder="🔍 Search by name, course, branch, university..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <span>
            Total Students: <b>{filteredStudents.length}</b>
          </span>

        </section>

        {/* ALL STUDENT DETAILS */}

        <section>

          <h2 className="section-title">
            👨‍🎓 All Student Details
          </h2>

          <div className="student-grid">

            {filteredStudents.length === 0 ? (

              <div className="no-student">
                <h2>😔 No Student Found</h2>
                <p>Try searching with another keyword.</p>
              </div>

            ) : (

              filteredStudents.map((student) => (

                <div
                  className="student-card"
                  key={student.id}
                >

                  {/* PHOTO */}

                  <img
                    src={student.photo}
                    alt={student.fullName}
                    className="student-photo"
                  />

                  {/* DETAILS */}

                  <div className="student-info">

                    <h2>{student.fullName}</h2>

                    <div className="detail">
                      <strong>🎓 Course:</strong>
                      <span>{student.course}</span>
                    </div>

                    <div className="detail">
                      <strong>💻 Branch:</strong>
                      <span>{student.branch}</span>
                    </div>

                    <div className="detail">
                      <strong>🏫 University:</strong>
                      <span>{student.university}</span>
                    </div>

                    <div className="detail">
                      <strong>📍 Address:</strong>
                      <span>{student.address}</span>
                    </div>

                  </div>

                  {/* BUTTONS */}

                  <div className="card-buttons">

                    <button
                      className="details-btn"
                      onClick={() =>
                        alert(`
Student Details

Name: ${student.fullName}
Course: ${student.course}
Branch: ${student.branch}
University: ${student.university}
Address: ${student.address}
                        `)
                      }
                    >
                      👁️ All Details
                    </button>

                    <button
                      className="edit-btn"
                      onClick={() => handleEdit(student)}
                    >
                      ✏️ Edit
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() =>
                        handleDelete(student.id)
                      }
                    >
                      🗑️ Delete
                    </button>

                  </div>

                </div>

              ))

            )}

          </div>

        </section>

      </main>

    </div>
  );
}

export default App;