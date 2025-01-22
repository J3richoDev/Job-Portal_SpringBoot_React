import { Avatar, AvatarGroup, Button, TextInput } from "@mantine/core"
import { IconSearch } from "@tabler/icons-react"

const LandingPage = () => {
  return (
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            <span className="text-mchite-400">Find a job</span> already. Wag tamad tamad
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                Success begins with <span className="text-mchite-400">kasipagan</span>. Start explore thousands of jobs in one place.
            </p>
            <div className="flex flex-row items-center gap-3">
                <TextInput
                className=" bg-dark-950 p-2 px-2 rounded-lg text-dark-100 [&_input]:!text-dark-100"
                variant="unstyled"
                size="lg"
                radius="md"
                label="Job Title"
                placeholder="Software Engineer"
                />
                <TextInput
                className=" bg-dark-950 p-2 px-2 rounded-lg text-dark-100 [&_input]:!text-dark-100"
                variant="unstyled"
                size="lg"
                radius="md"
                label="Job Type"
                placeholder="Remote"
                />
                <Button
                className="mt-6"
                size="md"
                variant="gradient"
                gradient={{ from: 'rgba(66, 140, 65, 1)', to: 'green', deg: 68 }}
                >
                    <IconSearch/>
                </Button>
            </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <div className="relative">
                <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mobile-app.svg" alt="mockup"/>
                <div className="absolute -right-10 top-[50%] rounded-lg p-2 w-fit border border-mchite-400 backdrop-blur-md">
                    <div>10k+ got job</div>
                    <AvatarGroup>
                        <Avatar src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"/>
                        <Avatar src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"/>
                        <Avatar src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png"/>
                        <Avatar>+9k</Avatar>
                    </AvatarGroup>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage