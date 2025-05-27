const About = () => {
  return (
    <div>
      <h3>About page</h3>
      <p>About page content</p>
      <p>The Team of SPA App.</p>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>johndoe@example.com</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jane Doe</td>
            <td>janedoe@example.com</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Bob Smith</td>
            <td>bobsmith@example.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default About;
