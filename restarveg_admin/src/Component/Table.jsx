import { Table, Container } from "semantic-ui-react";
import EyeIcon from "@material-ui/icons/Visibility";
const TablePage = (data) => {
  const fieldsName = data.fields;
  const fieldsValue = data.data.data;
  console.log("fieldsValue", fieldsValue);
  return (
    <Container>
      <Table>
        <Table.Header>
          <Table.Row>
            {fieldsName.map(({ name }) => {
              return <Table.HeaderCell>{name}</Table.HeaderCell>;
            })}
            <Table.HeaderCell>Order Details</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {fieldsValue.map((item, index) => (
            <Table.Row>
              <Table.Cell>{item.username}</Table.Cell>
              <Table.Cell>{item.useremail}</Table.Cell>
              <Table.Cell>{item.contact}</Table.Cell>
              <Table.Cell>
                <EyeIcon />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Container>
  );
};

export default TablePage;
