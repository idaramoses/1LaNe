import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Select from 'react-select';
import { useQuestions } from '@/context/QuestionsContext';
import { X, Search } from 'lucide-react';

interface QuestionUploadEvidenceDialogProps {
  isOpen: boolean;
  onClose: () => void;
  selectedOptions: any[];
}

const QuestionUploadEvidenceDialog: React.FC<QuestionUploadEvidenceDialogProps> = ({
  isOpen,
  onClose,
  selectedOptions
}) => {
  const {
    filteredDocuments,
    addDocumentToOption,
    removeDocumentFromOption
  } = useQuestions();

  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);

  // Format documents for react-select
  const documentOptions = filteredDocuments.map(doc => ({
    value: doc._id,
    label: doc.name || 'Unnamed Document',
    document: doc
  }));

  return (
    <Dialog open={isOpen} onOpenChange={onClose} >
      <DialogContent className="max-w-6xl items-center py-8">
   
        
        <div className="space-y-4 w-full">
            <div className='w-full justify-between flex flex-row'>
            <p className="text-xl text-center font-semibold self-center items-center"></p>

            <p className="text-xl text-center font-semibold self-center items-center">Upload evidence</p>

            <button 
            onClick={onClose}
            className="px-4 py-2 bg-black-900_01 text-white rounded-md hover:bg-gray-800"
          >
            Save & Continue
          </button>
            </div>

          <p className="text-center text-sm text-gray-600">
            Select question and upload evidence. You can upload <span className="text-green-600">multiple evidences</span> to one option
          </p>
          
          {/* Search Box */}
           <div className='w-full flex items-center justify-center'>
           <Select
              options={documentOptions}
              className="w-8/12 self-center "
              classNamePrefix="select"
              placeholder="Search in document manager"
              isClearable
              isSearchable
              isDisabled={!selectedOptionId}
              onChange={(selected) => {
                if (selected && selectedOptionId) {
                  const doc = selected.document;
                  addDocumentToOption(selectedOptionId, {
                    _id: doc._id,
                    name: doc.name || 'Unnamed Document'
                  });
                }
              }}
              styles={{
                control: (base) => ({
                  ...base,
                  minHeight: '42px',
                  paddingLeft: '2rem',
                  borderColor: '#e2e8f0',
                  '&:hover': {
                    borderColor: '#cbd5e1'
                  }
                }),
                container: (base) => ({
                  ...base,
                  '& .select__input': {
                    paddingLeft: '2rem'
                  }
                })
              }}
            />
           </div>
        

          {/* Options List */}
          <RadioGroup
            value={selectedOptionId || ""}
            onValueChange={setSelectedOptionId}
            className="space-y-6"
          >
            {selectedOptions.map((option) => (
              <div key={option.id} className="space-y-3 flex flex-row">
                {/* Option Header */}
                <div className="flex items-start gap-3 bg-[#F7F8F8] px-4 py-3 rounded-lg w-6/12">
                  <RadioGroupItem value={option.id} id={option.id} className="mt-1" />
                  <div className="w-full">
                    <label
                      htmlFor={option.id}
                      className="flex items-center gap-2 font-medium cursor-pointer text-sm"
                    >
                      <span>{option.evidence.title}</span>
                    </label>

                    {/* Document List */}
                    {option.selectedDocuments?.map((doc: any) => (
                      <div 
                        key={doc._id} 
                        className="mt-2 flex items-center justify-between w-full gap-4"
                      >
                        <div className='w-full'>
                        <span className="text-sm ">{doc.name}</span>
                        <div className="h-1 bg-[#014E64] rounded-full flex-1" />
                        </div>
                        {doc.name === option.evidence.title?(<span className="text-xs text-green-500">Matched</span>):(    <span className="text-xs text-red-500">Unmatched</span>)}
                        <button 
                          onClick={() => removeDocumentFromOption(option.id, doc._id)}
                          className="text-gray-400 hover:text-gray-600"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="ml-8 border-2 border-dashed border-gray-200 rounded-lg w-6/12 h-[185px] flex justify-center items-center">
                    <div className="text-center flex flex-row">
                    <svg width="30" height="35" viewBox="0 0 30 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 0V7.25V7.32889C11.4999 7.9438 11.4997 8.54137 11.5654 9.03426C11.6394 9.58989 11.82 10.224 12.3421 10.7506C12.8642 11.2773 13.4928 11.4593 14.0437 11.534C14.5323 11.6003 15.1247 11.6001 15.7343 11.6H15.8125H23V20.3C23 24.4012 23 26.4518 21.7369 27.7259C20.4737 29 18.4408 29 14.375 29H8.625C4.55913 29 2.52621 29 1.2631 27.7259C3.42727e-07 26.4518 0 24.4012 0 20.3V8.7C0 4.59878 3.42727e-07 2.54817 1.2631 1.27409C2.52621 0 4.55913 0 8.625 0H11.5ZM14.375 0.00669911V7.25C14.375 7.97452 14.378 8.37205 14.4148 8.64783L14.4163 8.6584L14.4268 8.65985C14.7002 8.69693 15.0942 8.7 15.8125 8.7H22.9934C22.9787 8.10312 22.9317 7.70813 22.7812 7.34144C22.5623 6.8085 22.1468 6.38941 21.3158 5.55122L17.4967 1.69878C16.6657 0.86059 16.2502 0.441496 15.7218 0.220748C15.3583 0.0688606 14.9667 0.0214746 14.375 0.00669911Z" fill="#E7EFF5"/>
                <circle cx="21.5" cy="26.5" r="8.5" fill="#086AFE"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.5 21C20.205 21 19.0912 21.8497 18.5936 23.0682C18.5458 23.1854 18.5119 23.2683 18.4858 23.3287C18.4729 23.3586 18.4631 23.3799 18.4557 23.3951C18.4502 23.4064 18.4472 23.4116 18.4466 23.4128C18.4465 23.4129 18.4466 23.4127 18.4466 23.4128C18.4066 23.4741 18.3854 23.493 18.3731 23.5018C18.3607 23.5106 18.3364 23.5242 18.2685 23.5392C18.2479 23.5437 18.2052 23.5455 18.0263 23.5455C16.9072 23.5455 16 24.5426 16 25.7727C16 27.0028 16.9072 28 18.0263 28H18.4151L18.9941 27.3636H18.0263C17.227 27.3636 16.5789 26.6514 16.5789 25.7727C16.5789 24.8941 17.227 24.1818 18.0263 24.1818L18.0573 24.1818C18.1882 24.182 18.2969 24.182 18.3827 24.1631C18.4874 24.1399 18.5903 24.1053 18.6876 24.036C18.785 23.9668 18.8559 23.8777 18.9179 23.7823C18.9515 23.7307 18.9814 23.665 19.0086 23.602C19.0378 23.5345 19.0743 23.4451 19.1203 23.3326L19.1218 23.3288C19.5294 22.3306 20.4413 21.6364 21.5 21.6364C22.5587 21.6364 23.4706 22.3306 23.8782 23.3288L23.8798 23.3327C23.9257 23.4452 23.9622 23.5345 23.9914 23.602C24.0186 23.665 24.0485 23.7307 24.082 23.7823C24.1441 23.8777 24.215 23.9668 24.3124 24.036C24.4097 24.1053 24.5126 24.1399 24.6173 24.1631C24.7031 24.182 24.8118 24.182 24.9427 24.1818L24.9737 24.1818C25.773 24.1818 26.4211 24.8941 26.4211 25.7727C26.4211 26.6514 25.773 27.3636 24.9737 27.3636H24.0059L24.5849 28H24.9737C26.0928 28 27 27.0028 27 25.7727C27 24.5426 26.0928 23.5455 24.9737 23.5455C24.7948 23.5455 24.7521 23.5437 24.7315 23.5392C24.6636 23.5242 24.6393 23.5106 24.627 23.5018C24.6146 23.493 24.5935 23.4743 24.5536 23.413C24.553 23.4119 24.5498 23.4064 24.5443 23.3951C24.5369 23.3799 24.5271 23.3586 24.5142 23.3287C24.4881 23.2683 24.4542 23.1854 24.4064 23.0682C23.9088 21.8497 22.795 21 21.5 21Z" fill="white"/>
                <path d="M21.5 26.4849L21.2157 26.2424L21.5 26L21.7843 26.2424L21.5 26.4849ZM21.9019 32.6571C21.9019 32.8465 21.7219 33 21.5 33C21.278 33 21.098 32.8465 21.098 32.6571H21.9019ZM18 28.9856L21.2157 26.2424L21.7843 26.7274L18.5685 29.4706L18 28.9856ZM21.7843 26.2424L25 28.9856L24.4315 29.4706L21.2157 26.7274L21.7843 26.2424ZM21.9019 26.4849V32.6571H21.098V26.4849H21.9019Z" fill="white"/>
                </svg>
                <p  className="self-end flex  flex-row !text-gray-900_05 text-xs px-2">
                  Drag and drop file or
                  <div     className="underline tex-xs  text-gray-900_05 text-sm px-1">
                choose file
                </div>
                </p>
                    </div>
                  </div>
                {/* Upload Area - only show for selected option */}
                {/* {selectedOptionId === option.id && (
                  <div className="ml-8 border-2 border-dashed border-gray-200 rounded-lg">
                    <div className="p-8 text-center">
                      <div className="flex items-center justify-center mb-2">
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                          <span className="text-2xl text-gray-400">+</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">
                        Drag and drop file or <span className="text-blue-500 underline cursor-pointer">choose file</span>
                      </p>
                    </div>
                  </div>
                )} */}
              </div>
            ))}
          </RadioGroup>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuestionUploadEvidenceDialog;