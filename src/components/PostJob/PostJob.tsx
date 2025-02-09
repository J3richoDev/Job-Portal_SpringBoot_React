import { Button, Select, TagsInput } from "@mantine/core";
import { fields } from '../../Data/PostJob';
import TextEditor from "./TextEditor";

const PostJob = () => {
  return (
    <div className="w-4/5 mx-auto">
        <div className="text-2xl font-semibold my-5">Post a Job</div>
        <div className="grid grid-cols-2 gap-10">
            <div>
            {
                fields.map((field,index)=> index<3 &&
                    <div className="mb-5">
                        <Select
                        key={index}
                        label={field.label}
                        placeholder={field.placeholder}
                        data={field.options}
                        clearable
                        required
                    />
                    </div>)
            }
            </div>
            <div>
            {
                fields.map((field,index)=> index>2 &&
                    <div className="mb-5">
                        <Select
                            key={index}
                            label={field.label}
                            placeholder={field.placeholder}
                            data={field.options}
                            clearable
                            required
                        />
                    </div>)
            }
            </div>
        </div>
        <TagsInput withAsterisk label="Skills" placeholder="Enter skill" splitChars={[',',' ','|']} clearable acceptValueOnBlur/>
        <div className="my-5 [&_button[data-active='true']]:!text-mchite-400 [&_button[data-active='true']]:!bg-mchite-400/20">
            <div className="text-sm font-medium mb-1">Job Description</div>
            <TextEditor/>
        </div>
        <Button color="mchite.4" variant="light">Publish Job</Button>
        <Button color="mchite.4" variant="outline">Save as Draft</Button>
    </div>
  )
}

export default PostJob