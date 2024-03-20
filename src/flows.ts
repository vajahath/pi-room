import five from "johnny-five";
const { Led } = five;

export async function ledBlink(pin: string, ms: number) {
  const led = new Led("P1-13");

  led.blink(200);

  console.log(`blinking: ${pin} (${ms}ms)`);
}
