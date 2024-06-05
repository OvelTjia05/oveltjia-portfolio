import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Education = () => {
  const educationList = [
    {
      name: "SD Inpres Maen",
      yearRange: "2007 - 2013",
    },
    {
      name: "SMP Advent Getsemani Wineru",
      yearRange: "2013 - 2016",
    },
    {
      name: "SMK Negeri 5 Manado (Computer and Network Engineering)",
      yearRange: "2016 - 2019",
    },
    {
      name: "Universitas Klabat (Informatics major, Faculty of Computer Science)",
      yearRange: "2020 - 2024",
    },
  ];

  const sortedEducationList = educationList.sort((a, b) => {
    const [startYearA, endYearA] = a.yearRange.split(" - ").map(Number);
    const [startYearB, endYearB] = b.yearRange.split(" - ").map(Number);

    if (startYearA !== startYearB) {
      return startYearB - startYearA;
    }

    return endYearB - endYearA;
  });

  const formatName = (name: string) => {
    return name.replace(/\s*\(([^)]+)\)/, "\n($1)");
  };

  return (
    <Table className="overflow-hidden">
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Year</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sortedEducationList.map((item, index) => (
          <TableRow
            key={item.name}
            className={`animate-slide-up opacity-0`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <TableCell className="whitespace-pre-line">
              {formatName(item.name)}
            </TableCell>
            <TableCell>{item.yearRange}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Education;
