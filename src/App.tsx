import * as React from 'react';
import './App.css';
import { Paper, Table, TableCell, TableRow, TableHead, TableBody } from '@material-ui/core';
import Rooms from './Rooms';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="left">Bedroom</TableCell>
                <TableCell align="left">Bid Price</TableCell>
                <TableCell align="left">Bid</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <Rooms names={['Master', 'Bedroom 2', 'Bedroom 3']}/>
            </TableBody>
          </Table>
          
        </Paper>
        
      </div>
    );
  }
}

export default App;
