import { useState } from "react"

export default function RandomGenerator() {

    const [typeOfColor, setTypeofColor] = useState('hex')
    const [color, setColor] = useState('#000000')

    function handleHexUtility(length) {
        return Math.floor(Math.random()*length)
    }

    function handleGenerateRandomHexColor() {
        const hex = [0, 1, 2, 3, 4, 5, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
        let hexColor = '#'

        for(let i=0; i<6; i++){
            hexColor += hex[handleHexUtility(hex.length)]
        }

        setColor(hexColor)
    }

    function handleGenerateRandomRgbColor() {

    }

    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            backgroundColor: color,
        }}>
            <button onClick={() => setTypeofColor('hex')}>Genearate HEX Color</button>
            <button onClick={() => setTypeofColor('rgb')}>Generate RGB Color</button>
            <button onClick={typeOfColor === 'hex' ? handleGenerateRandomHexColor : handleGenerateRandomRgbColor}>Generate Random Color</button>
        </div>
    )
}