import { Button, TextInput } from "@mantine/core"

const Subscribe = () => {
  return (
    <div className="mt-20 flex items-center justify-evenly bg-dark-900 mx-20 py-3 rounded-xl">
        <div className="w-2/5 p-2 text-4xl text-center font-semibold text-dark-100">
            Never Want to Miss Any<span className="text-mchite-400 mb-3"> Job News?</span>
        </div>
        <div className="flex gap-4 items-center px-3 py-2 rounded-xl bg-dark-800 text-center">
            <TextInput
                className="[&_input]:text-dark-100 font-semibold"
                variant="unstyled"
                placeholder="example@email.com"
                size="xl"
            />
            <Button
                className="!rounded-lg"
                size="lg"
                color="mchite.4"
                variant="filled"
            >
                Subscribe
            </Button>
        </div>
    </div>
  )
}

export default Subscribe