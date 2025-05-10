  import type { MetaFunction } from "@remix-run/node";
  import {TableSelector} from "~/components/queryBuilder/TableSelector";
  //import { useQueryBuilder } from '~/hooks/useQueryBuilder';
  import {Tables} from "~/mocks/mockData";
  import {HeadTableIcon} from "~/components/icons/HeadTableIcon";
  import {FieldSelector} from "~/components/queryBuilder/FieldSelector";
  import { useState } from 'react';
  import { getColumnIcon } from '~/utils/columnIcons';
  import { FieldSelected } from "~/components/queryBuilder/FieldSelected";
  import {Table} from "~/types/queryBuilder";
  import {DropUpArrow} from "~/components/icons/DropUpArrow";
  import {TrashIcon} from "~/components/icons/TrashIcon";
  import {CircleArrow} from "~/components/icons/CircleArrow";
  import {FormulaFxIcon} from "~/components/icons/FormulaFxIcon";
  import {DropDownArrow} from "~/components/icons/DropDownArrow";
  import {FileQuestionIcon} from "~/components/icons/FileQuestionIcon";
  import {EditIcon} from "~/components/icons/EditIcon";
  import {DitsHorizontal} from "~/components/icons/DotsHorizontal";


  export const meta: MetaFunction = () => {
    return [
      {title: "New Remix App"},
      {name: "description", content: "Welcome to Test page!"},
    ];
  };

  // export function QueryBuilder() {
  //   const {queryState, updateSelectedTable} = useQueryBuilder();
  //
  //
  //   const handleTableSelect = (tableName: string) => {
  //     updateSelectedTable(tableName);
  //   };

    export default function Index() {
      const [selectedFields, setSelectedFields] = useState<Array<string>>([]);

      const handleFieldSelect = (field: string) => {
        setSelectedFields([...selectedFields, field]);
      };

      // For future use if appears the need to delete choose field
      // const handleRemoveField = (indexToRemove: number) => {
      //   setSelectedFields(selectedFields.filter((_, index) => index !== indexToRemove));
      // };

      const FieldWithIcon = ({ table, selectedField }: { table: Table,  selectedField: string }) => {
        const IconComponent = getColumnIcon(selectedField);
        return (
            <span className="flex items-center h-5 rounded-none color-text-tertiary">
              <span className="text-base rounded-none">Field:</span>
              <FieldSelected selectedTable={table}
                             selectedField={selectedField}
                             onFieldSelect={()=>{}}/>
            </span>
        );
      };


      return (
          <div className="w-[722px] items-end flex-col mx-auto bg-white rounded-xl shadow-md border-[#E4E7EC] border">

            <div className="flex justify-between bg-header items-center h-[44px] px-[14px] py-[6px] rounded-t-lg">
              <div className="flex items-center gap-3">
                <span className="text-lg font-medium bg-header inline-flex items-center gap-1 bg-gray-100 px-2 py-0.5 capitalize rounded tracking-thin">
                  <HeadTableIcon />
                  Zeak
                </span>
              </div>
              <div className="flex items-center space-x-3 p-0.5 text-gray-500">
                <button title="Function" className="hover:text-gray-700 text-xl">
                  <FormulaFxIcon/>
                </button>
                <button title="Refresh" className="hover:text-gray-700  p-0.5 ">
                  <CircleArrow/>
                </button>
                <button title="Delete" className="hover:text-red-600  p-0.5 ">
                  <TrashIcon />
                </button>
                <button title="More options" className="text-gray-500 hover:text-gray-700  p-0.5 ">
                  <DropUpArrow/>
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-4 pb-6 items-start bg-primary ">
              <div className="flex flex-col justify-end items-start h-auto gap-6 w-full bg-white">
                <div className="flex flex-col items-start p-6 gap-6  border-b w-full rounded-xl shadow-none border-none bg-primary">
                  <h2 className="flex justify-between text-xl font-medium tracking-thin w-full">
                    Field Selector
                    <DropDownArrow/>
                  </h2>
                  <div className="flex flex-col items-start gap-0.5 w-full min-h-[200px] rounded-xl">
                    {/*Select table and fields*/}
                    <div className="bg-white w-full">
                      <div className="flex flex-col items-start gap-3 bg-white p-4 w-full rounded-t-xl">
                      <div className="flex flex-wrap gap-3 bg-white w-full">
                        <div className="flex items-center gap-3 justify-center py-3.5 px-3 bg-fields rounded-xl">
                          <div className="flex items-center text-base leading-5 tracking-thin font-normal color-text-tertiary bg-fields">
                            Table Name:
                            <TableSelector
                                tables={Tables}
                                onSelect={()=>{}}
                            />
                          </div>
                        </div>
                          {/* Display selected fields */}

                          {selectedFields.map((field, index) => (
                              <div key={index}  className="flex items-center gap-3 justify-center py-3.5 px-3 bg-fields rounded-xl">
                              <div className="flex items-center gap-1">
                              <span className="bg-fields text-sm flex items-center gap-1">
                                <span className="flex justify-center">
                                  <FieldWithIcon selectedField={field} table={Tables[0]}/>
                                </span>
                              </span>
                              </div>
                              </div>
                          ))}
                      </div>
                    </div>

                      <div className="flex items-center gap-3 justify-start pb-3.5 border-none shadow-none px-3 bg-white">
                      <FieldSelector selectedTable={Tables[0]}
                                     onFieldSelect={handleFieldSelect}/>
                    </div>
                    </div>
                     {/*file-question*/}
                    <div className="flex items-center justify-between p-3 h-12 border-none shadow-none px-3 rounded-b-xl bg-white w-full">
                      <div className="flex items-center gap-1 px-1 py-[3px] h-6 bg-text-tertiary rounded-sm">
                        <FileQuestionIcon />
                      </div>
                      <div className='flex between justify-end items-center gap-1 w-full'>

                          <div className="flex-row text-sm font-medium text-text-tertiary justify-end flex gap-5 bg-white" >
                            <button title="Edit">
                              <EditIcon />
                            </button>
                            <button title="Delete">
                              <TrashIcon/>
                            </button>
                            <button title="More options">
                              <DitsHorizontal/>
                            </button>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white w-full ">

                  <div className="p-4 bg-blue-50">
                  <div className="mb-2 flex justify-between items-center">
                    <h3 className="text-blue-700 font-semibold">Condition 1</h3>
                    <button className="text-red-500 hover:text-red-700">🗑️</button>
                  </div>

                  <button className="text-blue-600 text-sm hover:underline mb-4">+ Add a Join</button>

                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-gray-200 px-2 py-1 text-xs rounded">WHERE</span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <span className="bg-gray-300 text-xs px-2 py-1 rounded-full">A</span>
                      <select className="border rounded px-2 py-1 text-sm">
                        <option>Field</option>
                      </select>
                      <select className="border rounded px-2 py-1 text-sm">
                        <option>Condition</option>
                      </select>
                      <input type="text" placeholder="Value" className="border rounded px-2 py-1 text-sm"/>
                      <button className="text-red-500 hover:text-red-700">🗑️</button>
                    </div>
                  </div>


                  <div className="flex gap-2">
                    <button className="bg-yellow-300 hover:bg-yellow-400 text-sm px-3 py-1 rounded font-medium">+ AND
                    </button>
                    <button className="bg-yellow-300 hover:bg-yellow-400 text-sm px-3 py-1 rounded font-medium">+ OR
                    </button>
                  </div>


                </div>

                  <div className="p-4">
                  <button className="text-blue-600 text-sm hover:underline">+ Add Condition</button>
                </div>

                </div>
              </div>
            </div>


          </div>
      );
    }
  // }