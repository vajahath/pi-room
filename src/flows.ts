import five from "johnny-five";
const { Led } = five;

export async function ledBlink(pin: string, ms: number) {
  const led = new Led(pin);

  led.blink(ms);

  console.log(`blinking: ${pin} (${ms}ms)`);
}
