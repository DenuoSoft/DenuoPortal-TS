import { useState } from 'react';
import { ProfileConfig} from '../../models/profile';

const [modalData, setModalData] = useState<any>(null);

export const employeeProfileConfig: ProfileConfig[] = [
        {
            key: 'position',
            label: 'Job Position:',
            value: modalData?.position?.name,
            showIfEmpty: false
        },
        {
            key: 'ext_phone',
            label: 'Extension:',
            value: modalData?.ext_phone,
            showIfEmpty: false
        },
        {
            key: 'mobile_phone',
            label: 'Mobile Phone:',
            value: modalData?.mobile_phone,
            showIfEmpty: false
        },
        {
            key: 'office',
            label: 'Office:',
            value: modalData?.location,
            showIfEmpty: false
        },
        {
            key: 'assistant',
            label: 'Assistant:',
            value: modalData?.assistant,
            showIfEmpty: false
        },
        {
            key: 'assistant_ext',
            label: 'Assistant extension:',
            value: modalData?.assistant_ext,
            showIfEmpty: false
        }
    ];