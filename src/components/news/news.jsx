import React from 'react'
import styled from 'styled-components'

const Canvas = styled.canvas`
    border: 3px solid black;
    margin: 20px;
`

var data = [16, 68, 20, 30, 54, 35, 45, 80, 150];

export class Chart extends React.Component {

    componentDidMount() {
        this.updateCanvas();
    }
    updateCanvas() {
        const c = this.refs.canvas.getContext('2d');

        c.fillStyle = "white";
        c.fillRect(0, 0, 500, 500);

        c.fillStyle = "blue";
        for (let i = 0; i < data.length; i++) {
            var dp = data[i];

            c.lineTo(50 + i * 50, 250 - dp);
            c.stroke();
        }
        c.fillStyle = 'black'
        c.lineWidth = 2
        c.beginPath()
        c.moveTo(30, 10)
        c.lineTo(30, 270)
        c.lineTo(480, 270)
        c.stroke();

        c.fillStyle = 'black'
        for( let i = 0; i<6; i++){
            c.fillText((5 - i) * 20 + '', 6, i * 80 + 30)
            c.beginPath()
            c.moveTo(25, i * 80 + 30)
            c.lineTo(30, i * 80 + 30)
            c.stroke()
        }

        let labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY']
            for(let i = 0; i<labels.length; i++){
                c.fillText(labels[i], 50 + i * 100, 280)
                c.stroke()
            }
    }

    render() {
        return (
            <div>
                <Canvas ref='canvas' width={500} height={300}></Canvas>
            </div>
        )
    }
}