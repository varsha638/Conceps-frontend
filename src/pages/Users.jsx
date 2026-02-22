import { useState } from "react";

const usersData = [
  {
    id: 1,
    name: "Varsha Kumar",
    email: "varsha.kumar@gmail.com",
    department: "Product Management",
    location: "Chennai",
    experience: "3 Years",
  },
  {
    id: 2,
    name: "Vivek Sharma",
    email: "vivek.sharma@gmail.com",
    department: "Marketing",
    location: "Bangalore",
    experience: "2 Years",
  },
  {
    id: 3,
    name: "Moni Raj",
    email: "moni.raj@gmail.com",
    department: "HR",
    location: "Hyderabad",
    experience: "4 Years",
  },
  {
    id: 4,
    name: "Arun Prakash",
    email: "arun.prakash@gmail.com",
    department: "Sales",
    location: "Mumbai",
    experience: "5 Years",
  },
  {
    id: 5,
    name: "Sneha Iyer",
    email: "sneha.iyer@gmail.com",
    department: "Finance",
    location: "Pune",
    experience: "3 Years",
  },
  {
    id: 6,
    name: "Rahul Mehta",
    email: "rahul.mehta@gmail.com",
    department: "Operations",
    location: "Delhi",
    experience: "6 Years",
  },
  {
    id: 7,
    name: "Priya Nair",
    email: "priya.nair@gmail.com",
    department: "Support",
    location: "Kochi",
    experience: "2 Years",
  },
  {
    id: 8,
    name: "Karthik R",
    email: "karthik.r@gmail.com",
    department: "Engineering",
    location: "Coimbatore",
    experience: "4 Years",
  },
  {
    id: 9,
    name: "Divya S",
    email: "divya.s@gmail.com",
    department: "Design",
    location: "Chennai",
    experience: "1 Year",
  },
  {
    id: 10,
    name: "Gokul Anand",
    email: "gokul.anand@gmail.com",
    department: "Admin",
    location: "Madurai",
    experience: "5 Years",
  },
  {
    id: 11,
    name: "Harini V",
    email: "harini.v@gmail.com",
    department: "Testing",
    location: "Trichy",
    experience: "2 Years",
  },
  {
    id: 12,
    name: "Manoj K",
    email: "manoj.k@gmail.com",
    department: "Development",
    location: "Salem",
    experience: "4 Years",
  },
  {
    id: 13,
    name: "Anita Rao",
    email: "anita.rao@gmail.com",
    department: "Marketing",
    location: "Bangalore",
    experience: "3 Years",
  },
  {
    id: 14,
    name: "Sathish P",
    email: "sathish.p@gmail.com",
    department: "HR",
    location: "Chennai",
    experience: "6 Years",
  },
  {
    id: 15,
    name: "Keerthana M",
    email: "keerthana.m@gmail.com",
    department: "Finance",
    location: "Hyderabad",
    experience: "2 Years",
  },
];

export default function Users() {
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  const indexOfLast = currentPage * usersPerPage;
  const indexOfFirst = indexOfLast - usersPerPage;
  const currentUsers = usersData.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(usersData.length / usersPerPage);

  return (
    <>
      <table className="users-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Department</th>
            <th>Location</th>
            <th>Experience</th>
          </tr>
        </thead>

        <tbody>
          {currentUsers.map((user, index) => (
            <tr key={user.id}>
              <td>{indexOfFirst + index + 1}</td>
              <td>
                <strong>{user.name}</strong>
                <br />
                <small className="email-text">
                  {user.email}
                </small>
              </td>
              <td>{user.department}</td>
              <td>{user.location}</td>
              <td>{user.experience}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={currentPage === index + 1 ? "active-page" : ""}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
}