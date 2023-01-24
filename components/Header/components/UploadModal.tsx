import { ChangeEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { useMutation } from '@apollo/client';
import { UploadPicture, UploadPictureVariables } from '../../../queries/__generated__/UploadPicture';
import { UPLOAD_PICTURE } from '../../../queries/UploadPicture';
import { TRootState } from '../../../redux/store';

interface IUploadModalProps {
    isVisible: boolean;
    handleModalClose: () => void,
}

// TODO: add modal close btn
export const UploadModal: React.FC<IUploadModalProps> = ({isVisible, handleModalClose }) => {
    const [description, setDescription] = useState<string | null>(null);
    const [uploadPicture] = useMutation<UploadPicture, UploadPictureVariables>(UPLOAD_PICTURE);
    const {userId} = useSelector((state: TRootState) => state.user);

    const handleUpload = async (e: ChangeEvent<HTMLInputElement>) => {
        if (!userId) return;

        const reader = new FileReader();

        if (e.target.files && reader) {
            let base64String: string;
            const file = e.target.files[0];
            reader.onload = function () {
                base64String = (reader?.result as string)
                    .replace('data:', '')
                    .replace(/^.+,/, '');

                uploadPicture({
                    variables: {
                        input: {
                            userId,
                            picture: base64String,
                            description,
                        }
                    },
                    onCompleted: () => handleModalClose(),
                });
            };

            if (file) {
                reader.readAsDataURL(file);
            }
        }
    };

    return (
        <div
            className={`${isVisible ? 'block' : 'hidden'} absolute top-0 left-0 z-20 flex items-center justify-center h-screen w-screen bg-[rgba(0,0,0,0.3)]`}>
            <div className="w-[600px] p-4 bg-primary border-3 border-secondary
          shadow-[0_18px_0px_-10px] shadow-secondary">
                <div className="flex flex-col">
                    <div className="flex flex-col">
                        <label htmlFor="description">description:</label>
                        <textarea
                            id="description"
                            name="description"
                            className="border-2 border-secondary p-2"
                            onChange={(e => setDescription(e.target.value))}
                        />
                    </div>
                    <div className="flex justify-end">
                        <input
                            id="file"
                            type="file"
                            name="file"
                            accept="image/png, image/jpeg"
                            className="input-file"
                            onChange={handleUpload}
                        />
                        <label htmlFor="file" className="p-2">upload</label>
                        <button className="button" onClick={handleModalClose}>close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
