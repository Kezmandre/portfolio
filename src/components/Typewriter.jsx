import Typewriter from "typewriter-effect"

const Typewriters = () => {
  return (
    <Typewriter
    options={{
      strings: [
        "Full Stack Developer",
        "Open Source Contributor",
      ],
      autoStart: true,
      loop: true,
      deleteSpeed: 50,
    }}
  />
  )
}

export default Typewriters