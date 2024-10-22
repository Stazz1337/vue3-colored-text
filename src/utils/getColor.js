export default function getColor(tone) {
    if(tone < -1 || tone > 1) {
        console.warn('Неверный тон')
        tone = 0
      }      

      let colors = {
        red: 255 - (tone * 255),
        green: 255 + (tone * 255)
      }

      Object.keys(colors).forEach(k => {
        if(colors[k] > 255) colors[k] = 255
      })  

      const stringifiedColorStyle = `rgb(${colors.red}, ${colors.green}, 0)`
      return stringifiedColorStyle
}