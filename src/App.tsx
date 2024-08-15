import { Avatar, Box, Button } from "@mui/material"
import CircleOfFithBackground from "./assets/Circle-of-Fifths-Big-600x600.jpg"
import UndoIcon from "@mui/icons-material/Undo"
import RedoIcon from "@mui/icons-material/Redo"
import { useState } from "react"

const desvioInicialDoCirculoDeQuintas = -15
const rotacaoPorNota = 30

function calcularRotacaoNota(qualNota: number) {
  return desvioInicialDoCirculoDeQuintas + rotacaoPorNota * qualNota
}

function App() {
  const [nota, setarNota] = useState(0)

  return (
    <>
      <Avatar
        src={CircleOfFithBackground}
        sx={{
          width: "600px",
          height: "600px",
          margin: 0,
          padding: 0,
          transform: `rotate(${calcularRotacaoNota(nota)}deg)`,

          "& *": {
            margin: 0,
            padding: 0,
          },
        }}
      />
      <Box
        sx={{
          width: "601px",
          height: "601px",
          boxSizing: "border-box",
          borderRadius: "50%",
          borderTop: "300px solid #101010",
          borderLeft: "300px solid #101010",
          position: "absolute",
          top: 8,
          left: 8,
          transform: "rotate(-135deg)",
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          position: "absolute",
          width: 75,
          top: 350,
          left: 300,
          transform: "translate(-30px)",
        }}
      >
        <Button
          onClick={() => {
            setarNota(nota - 1)
          }}
        >
          <RedoIcon
            sx={{
              transform: "scale(4)",
            }}
          />
        </Button>
        <Button
          onClick={() => {
            setarNota(nota + 1)
          }}
        >
          <UndoIcon
            sx={{
              transform: "scale(4) scaleY(-1)",
            }}
          />
        </Button>
      </Box>
    </>
  )
}

export default App
