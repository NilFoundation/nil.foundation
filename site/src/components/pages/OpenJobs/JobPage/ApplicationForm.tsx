import { Button, FormControl, HeadingLarge, Input, LabelMedium } from '@nilfoundation/ui-kit'
import s from './Styles.module.scss'
import {useForm} from 'react-hook-form';
import {ApplicationData} from './types';

const ApplicationForm = () => {
    const {handleSubmit} = useForm<ApplicationData>({
        defaultValues: {
            name: '',
            surname: '',
            email: '',
        },
        mode: 'onChange',
    });

    return (
        <form className={s.wrapper}>
            <HeadingLarge marginTop="32px" marginBottom="32px">Submit Your Application</HeadingLarge>
            <div>
                <LabelMedium>Send resume as a file</LabelMedium>
                <LabelMedium>Attach resume in docx, doc, pdf to apply for this vacancy.</LabelMedium>
            </div>
            <div className={s.form}>
                <FormControl label="Name">
                    <Input
                        placeholder='Name'
                        type='text'
                    />
                </FormControl>
                <FormControl label="Surname">
                    <Input
                        placeholder='Surname'
                        type='text'
                    />
                </FormControl>
                <FormControl label="Email *">
                    <Input
                        placeholder='Email'
                        type='email'
                    />
                </FormControl>
                <FormControl label="Social Network and Web Links">
                    <Input
                        placeholder='Link'
                        type='text'
                    />
                </FormControl>
            </div>
            <Button>
                Submit application
            </Button>
        </form>
    );
}

export default ApplicationForm;
