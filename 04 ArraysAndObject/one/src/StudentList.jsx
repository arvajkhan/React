function StudentList() {
  const students = [
    {
      id: 1,
      fullName: "Arjun Sharma",
      age: 21,
      address: "Delhi, India",
      university: "Delhi University",
      branch: "Computer Science",
      course: "B.Tech",
      image: "https://i.pravatar.cc/300?img=1",
    },
    {
      id: 2,
      fullName: "Rahul Verma",
      age: 22,
      address: "Mumbai, India",
      university: "Mumbai University",
      branch: "Information Technology",
      course: "B.Tech",
      image: "https://i.pravatar.cc/300?img=2",
    },
    {
      id: 3,
      fullName: "Aman Khan",
      age: 20,
      address: "Lucknow, India",
      university: "Lucknow University",
      branch: "Mechanical Engineering",
      course: "B.Tech",
      image: "https://i.pravatar.cc/300?img=3",
    },
    {
      id: 4,
      fullName: "Priya Singh",
      age: 21,
      address: "Jaipur, India",
      university: "Rajasthan University",
      branch: "Electronics",
      course: "B.Tech",
      image: "https://i.pravatar.cc/300?img=4",
    },
    {
      id: 5,
      fullName: "Neha Gupta",
      age: 22,
      address: "Noida, India",
      university: "Amity University",
      branch: "Computer Science",
      course: "B.Tech",
      image: "https://i.pravatar.cc/300?img=5",
    },
    {
      id: 6,
      fullName: "Rohit Yadav",
      age: 23,
      address: "Gurgaon, India",
      university: "MDU University",
      branch: "Civil Engineering",
      course: "B.Tech",
      image: "https://i.pravatar.cc/300?img=6",
    },
    {
      id: 7,
      fullName: "Simran Kaur",
      age: 20,
      address: "Chandigarh, India",
      university: "Panjab University",
      branch: "Information Technology",
      course: "B.Tech",
      image: "https://i.pravatar.cc/300?img=7",
    },
    {
      id: 8,
      fullName: "Vikas Kumar",
      age: 21,
      address: "Patna, India",
      university: "Patna University",
      branch: "Electrical Engineering",
      course: "B.Tech",
      image: "https://i.pravatar.cc/300?img=8",
    },
    {
      id: 9,
      fullName: "Anjali Mehta",
      age: 22,
      address: "Bangalore, India",
      university: "Bangalore University",
      branch: "Computer Science",
      course: "B.Tech",
      image: "https://i.pravatar.cc/300?img=9",
    },
    {
      id: 10,
      fullName: "Mohit Ali",
      age: 23,
      address: "Hyderabad, India",
      university: "Osmania University",
      branch: "Artificial Intelligence",
      course: "B.Tech",
      image: "https://i.pravatar.cc/300?img=10",
    },
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Student Details</h1>

      <div className="row g-4">
        {students.map((student) => (
          <div className="col-12 col-md-6 col-lg-4 col-xl-3" key={student.id}>
            <div className="card h-100 shadow-sm">
              
              <img
                src={student.image}
                className="card-img-top"
                alt={student.fullName}
                style={{ height: "220px", objectFit: "cover" }}
              />

              <div className="card-body">
                <h4 className="card-title">{student.fullName}</h4>

                <p className="card-text mb-1">
                  <strong>Age:</strong> {student.age}
                </p>

                <p className="card-text mb-1">
                  <strong>Address:</strong> {student.address}
                </p>

                <p className="card-text mb-1">
                  <strong>University:</strong> {student.university}
                </p>

                <p className="card-text mb-1">
                  <strong>Branch:</strong> {student.branch}
                </p>

                <p className="card-text">
                  <strong>Course:</strong> {student.course}
                </p>
              </div>

              <div className="card-footer">
                <button className="btn btn-primary w-100">
                  View Profile
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentList;