import { motion } from "framer-motion";
import { useRef } from "react";
import { GiSelfLove } from "react-icons/gi";
import { IoNewspaperOutline } from "react-icons/io5";
import { RiTeamLine } from "react-icons/ri";
import { SiTarget } from "react-icons/si";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

interface SearchBarProps {
  query: string;
  setQuery: (query: string) => void;
  isFocused: boolean;
  searchRef: React.MutableRefObject<HTMLInputElement>;
  filters: { cancer: boolean; mutation: boolean; treatment: boolean };
  setFilters: (filters: { cancer: boolean; mutation: boolean; treatment: boolean }) => void;
  items: any[]; // Adjust type as needed
}

const SearchBar: React.FC<SearchBarProps> = ({
  query,
  setQuery,
  isFocused,
  searchRef,
  filters,
  setFilters,
  items,
}) => {
  return (
    <div className="rounded-3xl  w-[50rem] border-2 bg-white transition-all flex flex-col">
      <motion.div
        className="w-full bg-white rounded-full flex p-1  "
        initial="hidden"
        animate="visible"
      >
        <input
          type="text"
          ref={searchRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          name=""
          className="flex-1 bg-transparent text-slate-600 selection:placeholder:open:none py-2 px-4 placeholder:text-grey outline-none"
          id=""
          placeholder="Search Cancer ..."
        />
        <motion.button className="px-4 bg-[#DBE2EC] text-slate-400 rounded-full ml-2">
          Search
        </motion.button>
      </motion.div>
      <div className={cn(" w-full transition-all overflow-hidden duration-300 ", { 'h-0': !isFocused })}>
        <div className="flex flex-col p-2  px-2 gap-2">
          <div className="flex items-center gap-4 ">
            <Switch
              checked={filters.treatment}
              onCheckedChange={(checked) => {
                setFilters({ ...filters, treatment: checked });
              }}
              className="bg-red-200"
            />
            Treatments
          </div>
          <div className="flex items-center gap-4">
            <Switch
              checked={filters.cancer}
              onCheckedChange={(checked) => {
                setFilters({ ...filters, cancer: checked });
              }}
            />
            Cancer Types
          </div>
          <div className="flex items-center gap-4">
            <Switch
              checked={filters.mutation}
              onCheckedChange={(checked) => {
                setFilters({ ...filters, mutation: checked });
              }}
            />
            Mutations
          </div>
        </div>
        <div className="grid grid-cols-3">
          {items.length > 0 ? (
            items.map((item, index) => {
              if (item?.type === "cancer") {
                const cancer = item.item as CancerType;
                return (
                  <Link
                    href={`/d?cancer=${cancer.name.replaceAll(" ", "+")}`}
                    key={index}
                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-neutral-200 cursor-pointer"
                  >
                    <img
                      src={cancer.image}
                      alt=""
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="flex-col">
                      <div>{cancer.name}</div>
                      <div className="text-sm">{cancer.organ}</div>
                    </div>
                  </Link>
                );
              }
              if (item?.type === "treatment") {
                const cancer = item.item as Treatment;
                return (
                  <Link
                    href={`/d?treatments=${cancer.name.replaceAll(" ", "+")}`}
                    key={index}
                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-neutral-200 cursor-pointer"
                  >
                    <GiSelfLove className="w-12 h-12 rounded-full" />
                    <div className="flex-col">
                      <div>{cancer.name}</div>
                      <Badge className="text-xs" variant={"outline"}>
                        Mutation
                      </Badge>
                    </div>
                  </Link>
                );
              }
              if (item?.type === "mutation") {
                const cancer = item.item as Mutation;
                return (
                  <Link
                    href={`/d?cancer=${cancer.name.replaceAll(" ", "+")}`}
                    key={index}
                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-neutral-200 cursor-pointer"
                  >
                    <GiSelfLove className="w-12 h-12 rounded-full" />
                    <div className="flex-col">
                      <div>{cancer.name}</div>
                      <Badge className="text-xs" variant={"outline"}>
                        Mutation
                      </Badge>
                    </div>
                  </Link>
                );
              }
            })
          ) : (
            <div className="text-center col-span-3 italic my-2">
              No Results Found
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

