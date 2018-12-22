import { TableCell, TableRow, Fab } from "@material-ui/core";
import * as React from 'react';
import AddIcon from '@material-ui/icons/Add';

export interface IRoomState {
    stackMap: Map<string, Array<[string, number]>>,
    bidPriceMap: Map<string, number>
    total: number
}

export interface IRoomProps {
    names: string[]
}

export default class Rooms extends React.Component<IRoomProps, IRoomState> {
    constructor(props: IRoomProps) {
        super(props);
        const sMap = new Map(this.props.names.map(x => [x, []] as [string, Array<[string, number]>]));
        const bMap = new Map(this.props.names.map(x => [x, 700.00] as [string, number]));
        this.state = {
            bidPriceMap: bMap,
            stackMap: sMap,
            total: 2050
        };
    }

    public render() {
        return (
            this.props.names.map(name => 
                <TableRow key={name}>
                    <TableCell component="th" scope="row">{name}</TableCell>
                    <TableCell>{this.state.bidPriceMap.get(name)}</TableCell>
                    <TableCell>
                    <Fab color="primary" aria-label="Add" onClick={() => this.fabClick(name)}>
                        <AddIcon/>
                    </Fab>
                    </TableCell>
                </TableRow>
            )
        );
    }

    private fabClick = (clickedRoom: string) => {
        this.state.bidPriceMap.get(clickedRoom)
        this.setState({...this.state});
    }
}