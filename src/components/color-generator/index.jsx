import { useEffect, useState } from "react"

export default function RandomGenerator() {

    const [typeOfColor, setTypeofColor] = useState('hex')
    const [color, setColor] = useState('#000000')

    function handleHexUtility(length) {
        return Math.floor(Math.random() * length)
    }

    function handleGenerateRandomHexColor() {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
        let hexColor = '#'

        for (let i = 0; i < 6; i++) {
            hexColor += hex[handleHexUtility(hex.length)]
        }

        setColor(hexColor)
    }

    function handleGenerateRandomRgbColor() {
        const r = handleHexUtility(256)
        const g = handleHexUtility(256)
        const b = handleHexUtility(256)

        setColor(`rgb(${r}, ${g}, ${b})`)

    }
    useEffect(()=> {
        // typeOfColor === 'hex' ? handleGenerateRandomHexColor() : handleGenerateRandomRgbColor()
        if(typeOfColor === 'hex'){
            handleGenerateRandomHexColor()
        } else{
            handleGenerateRandomRgbColor()
        }
    }, [typeOfColor])

    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            backgroundColor: color,
        }}>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '1rem 2rem',
                    gap: '1rem',
                }}>
                <button onClick={() => setTypeofColor('hex')}>Genearate HEX Color Code</button>
                <button onClick={() => setTypeofColor('rgb')}>Generate RGB Color Code</button>
                <button onClick={typeOfColor === 'hex' ? handleGenerateRandomHexColor : handleGenerateRandomRgbColor}>Generate Random Color</button>
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontSize: '6rem',
                    marginTop: '1rem'
                }}>
                <h3>{typeOfColor === 'hex' ? 'Hex Color Code' : 'RGB Color Code'}</h3>
                <h2>{color}</h2>

            </div>
        </div>
    )
}